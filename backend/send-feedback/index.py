import json
import os
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart


def handler(event: dict, context) -> dict:
    """Отправка обратной связи на email ohranatruda.mihailova@yandex.ru"""
    headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
    }

    if event.get('httpMethod') == 'OPTIONS':
        return {'statusCode': 200, 'headers': headers, 'body': ''}

    body = json.loads(event.get('body', '{}'))
    name = body.get('name', '').strip()
    phone = body.get('phone', '').strip()
    question = body.get('question', '').strip()

    if not name or not phone or not question:
        return {
            'statusCode': 400,
            'headers': headers,
            'body': json.dumps({'error': 'Заполните все поля'})
        }

    smtp_password = os.environ['SMTP_PASSWORD']
    sender = 'ohranatruda.mihailova@yandex.ru'
    recipient = 'ohranatruda.mihailova@yandex.ru'

    msg = MIMEMultipart()
    msg['From'] = sender
    msg['To'] = recipient
    msg['Subject'] = 'Новая заявка с сайта РаботаЮнымВСК'

    text = f"""Новая заявка с сайта:

Имя: {name}
Телефон: {phone}
Вопрос: {question}
"""
    msg.attach(MIMEText(text, 'plain', 'utf-8'))

    with smtplib.SMTP_SSL('smtp.yandex.ru', 465) as server:
        server.login(sender, smtp_password)
        server.sendmail(sender, recipient, msg.as_string())

    return {
        'statusCode': 200,
        'headers': headers,
        'body': json.dumps({'success': True})
    }
