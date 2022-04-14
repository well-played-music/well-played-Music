from flask import Flask, request, render_template

app = Flask(__name__)


@app.route("/")
def response():
    return render_template('acceuil.html')

@app.route("/jouer")
def response2():
    return render_template('index.html')

if __name__=="__main__":
    app.run(debug=False)
