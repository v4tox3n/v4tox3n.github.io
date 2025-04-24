from flask import Flask, request
from flask_cors import CORS
import json
from datetime import datetime

app = Flask(__name__)
CORS(app)

@app.route('/log-data', methods=['POST'])
def log_data():
    data = request.json
    with open('captured_data.txt', 'a') as f:
        f.write(f"{datetime.now()} - {json.dumps(data)}\n")
    return {'status': 'ok'}

if __name__ == '__main__':
    app.run(port=5501)