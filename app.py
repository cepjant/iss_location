from flask import Flask, render_template
from iss.iss import get_iss_location
import json

app = Flask('__main__')


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/api/iss/')
def getting_iss_location():
    iss_position_data = get_iss_location()
    iss_position_data_json = json.dumps(iss_position_data)
    return iss_position_data_json


if __name__ == '__main__':
    app.run(debug=True)
