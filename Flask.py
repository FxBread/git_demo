from flask import Flask, Response, redirect, url_for, request, session, abort, render_template



app = Flask(__name__)


@app.route('/')
def index():
    return render_template('teleop.html')

if __name__ == "__main__":
    app.run(debug=True)