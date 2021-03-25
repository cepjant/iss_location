from flask import Flask, render_template
# import json
#
# from random import randint

app = Flask('__main__')


@app.route('/')
def index():
    return render_template('index.html')


# @app.route('/api/iss/')
# def index2():
#     return json.dumps({'longitude': randint(1,30), 'latitude': randint(1,100)})


if __name__ == '__main__':
    app.run(debug=True)
