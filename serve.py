# serve.py

from flask import Flask
from flask import render_template

# creates a Flask application, named app
app = Flask(__name__)

# a route where we will display a welcome message via an HTML template
@app.route("/")
def hello():
    message = "The Flask Shop"
    return render_template('index.html', message=message)

@app.route("/pprint/json")
def pretty_print_json():
    input_message = "copy json string into text area:"
    output_message = "pretty printed json:"
    js_file = "pprint-json.js"
    return render_template('input-output.html', input_message=input_message, output_message=output_message, js_file=js_file)

@app.route("/pprint/xml")
def pretty_print_xml():
    input_message = "copy xml string into text area:"
    output_message = "pretty printed xml:"
    js_file = "pprint-xml.js"
    return render_template('input-output.html', input_message=input_message, output_message=output_message, js_file=js_file)

@app.route("/minify/json")
def minify_json():
    input_message = "copy json string into text area:"
    output_message = "minified json:"
    js_file = "minify-json.js"
    return render_template('input-output.html', input_message=input_message, output_message=output_message, js_file=js_file)

@app.route("/encode/base64")
def encode_base64():
    input_message = "copy string into text area:"
    output_message = "base64 encoded string:"
    js_file = "encode-base64.js"
    return render_template('input-output.html', input_message=input_message, output_message=output_message, js_file=js_file)

@app.route("/encode/url")
def encode_url():
    input_message = "copy string into text area:"
    output_message = "url encoded string:"
    js_file = "encode-url.js"
    return render_template('input-output.html', input_message=input_message, output_message=output_message, js_file=js_file)

@app.route("/decode/base64")
def decode_base64():
    input_message = "copy base64 encoded string into text area:"
    output_message = "base64 decoded string:"
    js_file = "decode-base64.js"
    return render_template('input-output.html', input_message=input_message, output_message=output_message, js_file=js_file)

@app.route("/decode/url")
def decode_url():
    input_message = "copy url encoded string into text area:"
    output_message = "url decoded string:"
    js_file = "decode-url.js"
    return render_template('input-output.html', input_message=input_message, output_message=output_message, js_file=js_file)

@app.route("/hash/md5")
def hash_md5():
    input_message = "copy string into text area:"
    output_message = "md5 hashed string:"
    js_file = "hash-md5.js"
    return render_template('input-output.html', input_message=input_message, output_message=output_message, js_file=js_file)

@app.route("/hash/sha1")
def hash_sha1():
    input_message = "copy string into text area:"
    output_message = "sha1 hashed string:"
    js_file = "hash-sha1.js"
    return render_template('input-output.html', input_message=input_message, output_message=output_message, js_file=js_file)

@app.route("/hash/sha256")
def hash_sha256():
    input_message = "copy string into text area:"
    output_message = "sha256 hashed string:"
    js_file = "hash-sha256.js"
    return render_template('input-output.html', input_message=input_message, output_message=output_message, js_file=js_file)

@app.route("/caps/alternating")
def caps_alternating():
    input_message = "copy string into text area:"
    output_message = "alternating caps string:"
    js_file = "caps-alternating.js"
    return render_template('input-output.html', input_message=input_message, output_message=output_message, js_file=js_file)

# run the application
if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0")
