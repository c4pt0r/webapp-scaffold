from flask import Flask, jsonify
from flask_cors import CORS
from datetime import datetime, timedelta
import random

app = Flask(__name__)
CORS(app)  # 启用 CORS 以允许前端访问

def generate_mock_emails(count=10):
    senders = ["alice@example.com", "bob@example.com", "charlie@example.com"]
    subjects = [
        "Weekly Meeting Notes",
        "Project Update",
        "Important Announcement",
        "Team Lunch Tomorrow",
        "Code Review Request"
    ]
    
    emails = []
    for i in range(count):
        date = datetime.now() - timedelta(
            days=random.randint(0, 7),
            hours=random.randint(0, 23),
            minutes=random.randint(0, 59)
        )
        
        email = {
            "id": i + 1,
            "from": {
                "name": random.choice(senders),
                "email": random.choice(senders),
                "avatar": random.choice(senders).split("@")[0][0].upper()
            },
            "subject": random.choice(subjects),
            "content": f"This is the content of email #{i+1}. Lorem ipsum dolor sit amet.",
            "date": date.isoformat(),
            "labels": ["work", "personal", "urgent"],
            "read": random.choice([True, False]),
            "important": random.choice([True, False])
        }
        emails.append(email)
    
    return emails

@app.route('/api/emails', methods=['GET'])
def get_emails():
    emails = generate_mock_emails()
    return jsonify(emails)

if __name__ == '__main__':
    app.run(port=4000, debug=True)
