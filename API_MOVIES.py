from flask import Flask,jsonify,request
from http import HTTPStatus
from flask_cors import CORS
import json
import random

app = Flask(__name__)
CORS(app)

def list_of_values(text):
    if text == "Synopsis" or "synopsis" or "SYNOPSIS" or text[-1] != "s":
        list = [l[text.capitalize()] for l in movies]
        return remove_repeats(list)
    else:
        remove_s = text[:-1]
        list = [l[remove_s.capitalize()] for l in movies]
        return remove_repeats(list)

def remove_repeats(list):
    new_list = []
    for elem in list:
        if elem not in new_list:
            new_list.append(elem)
    return new_list


db = open('data.json')
data = json.load(db)
movies = data['movies']

@app.route("/",methods=["GET"])
def front_page():
    return jsonify(movies[-10:]), HTTPStatus.OK

@app.route("/movies",methods=["GET"])
def return_movies():
    return jsonify(movies)

@app.route("/movies/random",methods=["GET"])
def return_movies_random():
    return jsonify(random.sample(movies, 6))

@app.route("/movies/<id>",methods=["GET"])
def return_movie_by_id(id):
    for movie in movies:
        if movie["id"] == int(id):
            return jsonify(movie), HTTPStatus.OK
    return jsonify({}), HTTPStatus.NOT_FOUND

@app.route("/movies/list/<string:dir_gr>", methods=["GET"])
def genres_directors(dir_gr):
    return jsonify(list_of_values(dir_gr))


@app.route("/movies", methods=["POST"])
def create_movie():
    new_movie = request.get_json()
    last_id = [x['id'] for x in movies]
    new_id = max(last_id) + 1
    titles = [t['Title'] for t in movies]

    if new_movie["Title"] not in titles:
        if "Title" and "Year" and "Director" and "Genre" and "Synopsis" and "Poster" in new_movie:
            movies.append({
                "Title" : new_movie["Title"],
                "Year" : new_movie["Year"],
                "Director": new_movie["Director"],
                "Genre": new_movie["Genre"],
                "Synopsis": new_movie["Synopsis"],
                "id": new_id,
                "Poster": new_movie["Poster"]
            })
            return jsonify({}), HTTPStatus.OK
    else:
        return jsonify({}), HTTPStatus.BAD_REQUEST


@app.route("/movies/<id>", methods=["DELETE"])
def delete_movie(id):
    i = 0
    deleted = False

    for movie in movies:
        if movie["id"] == int(id):
            movies.pop(i)
            deleted = True
        i += 1

    if deleted:
        return jsonify({}), HTTPStatus.OK
    else:
        return jsonify({}), HTTPStatus.BAD_REQUEST


@app.route("/movies/edit/<id>", methods=["PUT"])
def edit_info(id):
    info = request.get_json()
    pos = int(id)
    ids = [i["id"] for i in movies]

    if info is None:
        return jsonify({"ERROR": 'Json not found'}), HTTPStatus.BAD_REQUEST
    elif pos not in ids:
        return jsonify({"ERROR": 'Movie not found'}), HTTPStatus.NO_CONTENT
    elif "Title" and "Year" and "Director" and "Genre" and "Synopsis" and "Poster" not in info:
        return jsonify({"ERROR": 'Missing info, please update'})
    else:
        movies[pos] = {
            "Title": info["Title"],
            "Year": info["Year"],
            "Director": info["Director"],
            "Genre": info["Genre"],
            "Synopsis": info["Synopsis"],
            "id": pos,
            "Poster": info["Poster"]
        }
        return jsonify({}), HTTPStatus.OK

# TODO:
# ruta para genres
# ruta para directors

app.run()
