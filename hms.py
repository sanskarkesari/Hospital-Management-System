from flask import Flask, render_template, request
import mysql.connector
import os

app = Flask(__name__)



# MySQL configuration
db = mysql.connector.connect(
    host="localhost",   # Change this to your MySQL server address
    user="root",    # Change this to your MySQL username
    password="admin",# Change this to your MySQL password
    database="hms"      # Change this to your MySQL database name
)
cursor = db.cursor()

# Route for displaying the form
@app.route('/')
def index():
    return render_template('patient.html')

# Route for handling form submission
@app.route('/submit_form', methods=['POST'])


def submit_form():
    patientID = request.form['patientID']
    patientName = request.form['patientName']
    address = request.form['address']
    age = request.form['age']
    policyNumber = request.form['policyNumber']

    # Insert form data into MySQL database
    sql = "INSERT INTO patient (patient_id, patient_name, address, age,policy_no) VALUES (%d, %s, %s, %s, %s)"
    values = (patientID, patientName, address, age, policyNumber)
    cursor.execute(sql, values)
    db.commit()

    return "Patient information added successfully"

if __name__ == '__main__':
    app.run(debug=True)  # Run the Flask app in debug mode
