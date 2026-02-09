from flask import Flask, render_template, request
import psycopg2

app = Flask(__name__)

conn = psycopg2.connect(
    host="localhost",
    database="FORMULARIO2",   # <-- el nombre exacto de tu base
    user="postgres",          # <-- tu usuario de PostgreSQL
    password="123456"  # <-- tu contraseña
)

@app.route('/')
def formulario():
    return render_template('form.html')

@app.route('/enviar', methods=['POST'])
def enviar():
    nombre = request.form['nombre']
    apellido = request.form['apellido']
    direccion = request.form['direccion']
    telefono = request.form['telefono']
    correo = request.form['correo']
    mensaje = request.form['mensaje']

    cur = conn.cursor()
    cur.execute(
        "INSERT INTO contactos (nombre, apellido, direccion, telefono, correo, mensaje) VALUES (%s, %s, %s, %s, %s, %s)",
        (nombre, apellido, direccion, telefono, correo, mensaje)
    )
    conn.commit()
    cur.close()
    return "Datos guardados correctamente."

if __name__ == '__main__':
    app.run(debug=True)