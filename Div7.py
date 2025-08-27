from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/submit', methods=['POST'])
def submit():
    answer = request.form['question']
    if answer.lower() == 'hypertext markup language':
        result = 'Jawaban Anda benar!'
    else:
        result = 'Jawaban Anda salah. Coba lagi!'
    return render_template('index.html', result=result)

if __name__ == '__main__':
    app.run(debug=True)