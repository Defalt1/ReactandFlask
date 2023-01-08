# Import flask and datetime module for showing date and time
from flask import Flask, jsonify
import datetime

x = datetime.datetime.now()
y = datetime.date.today().year - 2015

# Initializing flask app
app = Flask(__name__)


# Route for seeing a data
@app.route('/data')
def data():
    # Returning an api for showing in reactjs
    return {
        'Name': "Jullien",
        "yrsofprogramming": y,
        "Date": x,
        "languages": "HTML, CSS, Javascript, Python"
    }


# Running app
if __name__ == '__main__':
    app.run(debug=True)
