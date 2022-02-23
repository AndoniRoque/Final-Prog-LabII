from flask import Flask,jsonify,request
from http import HTTPStatus

app = Flask(__name__)


def list_of_values(text):
    if text == "Synopsis" or "synopsis" or "SYNOPSIS" or text[-1] != "s":
        return [l[text.capitalize()] for l in movies]
    else:
        remove_s = text[:-1]
        return [l[remove_s.capitalize()] for l in movies]


def remove_repeats(list):
    new_list = []
    for elem in list:
        if elem not in new_list:
            new_list.append(elem)
    return new_list


movies = [
    {
        'id': 0,
        'Title':'Breakfast_Club',
        'Year':'1985',
        'Director':'John Hughes',
        'Genre':'Drama',
        'Synopsis':'Five high school students find themselves in school detention on Saturday and discover that they have a lot more in common than they thought.',
        'Poster': 'https://pics.filmaffinity.com/Numb-377509483-large.jpg'
    },
      {
        'id': 1,
        'Title':'Jurassic_Park',
        'Year':'1993',
        'Director':'Steven Spielberg',
        'Genre':'Sci-Fi/Adventure',
        'Synopsis':'Thanks to DNA fossilized in amber, John Hammond brings to life various species of dinosaurs and creates Jurassic Park, a theme park on an island in Costa Rica. But what seemed like a dream quickly turns into a nightmare.',
        'Poster': 'https://m.media-amazon.com/images/I/51zlpAsG1nL._AC_.jpg'
    },
      {
        'id': 2,
        'Title':'Mulholland_Drive',
        'Year':'2001',
        'Director':'David Lynch',
        'Genre':'Suspense/Mystery',
        'Synopsis':'After an accident on Mulholland Drive, an amnesiac woman and an aspiring actress travel through Los Angeles searching for answers on a journey beyond dreams and reality.',
        'Poster': 'https://m.media-amazon.com/images/I/61bKYArP5PL._AC_SY679_.jpg'
    },
      {
        'id': 3,
        'Title':'In_the_Mood_for_Love',
        'Year':'2000',
        'Director':'Wong Kar-wai',
        'Genre':'Romantic/Drama',
        'Synopsis':'Two neighbors form a strong bond after they both suspect extramarital activities by their spouses. However, they agree to keep their platonic bond so as not to make similar mistakes.',
        'Poster': 'https://i.ibb.co/F4nfRKx/Em-DO0-Vk-Wk-AETP-r-copia.jpg'
    },
      {
        'id': 4,
        'Title':'Alien',
        'Year':'1979',
        'Director':'Ridley Scott',
        'Genre':'Sci-Fi/Horror',
        'Synopsis':'After responding to a call for help, the crew finds a ravenous and hideous creature aboard a spaceship.',
        'Poster': 'https://m.media-amazon.com/images/I/81lrPEEJ2WL._AC_SY741_.jpg'
    },
      {
        'id': 5,
        'Title':'Ghost',
        'Year':'1990',
        'Director':'Jerry Zucker',
        'Genre':'Romantic/Fantasy',
        'Synopsis':'Sam and Molly are very much in love. One day Sam is killed because of a dark business deal and is transformed into a ghost that wanders the streets.',
        'Poster': 'https://cdn.shopify.com/s/files/1/1416/8662/products/ghost_1990_original_film_art_2cc48497-c911-456d-873e-c90de476e0ee_1200x.jpg?v=1601918436'
    },
      {
        'id': 6,
        'Title':'Watchmen',
        'Year':'2009',
        'Director':'Zack Snyder',
        'Genre':'Action/Adventure',
        'Synopsis':'United States, 1980s, the Cold War is at its height, and superheroes, once admired, are now persecuted by the law. One day one of them, The Comedian, who worked for the CIA, turns up dead.',
        'Poster': 'https://m.media-amazon.com/images/I/516NcoJgvFL._AC_.jpg'
    },
      {
        'id': 7,
        'Title':'Side_Effects',
        'Year':'2013',
        'Director':'Steven Soderbergh',
        'Genre':'Suspense/Drama',
        'Synopsis':"Emily is a young woman who becomes addicted to a new drug prescribed by her psychiatrist to control the anxiety she suffers from her husband's imminent release from prison.",
        'Poster': 'https://m.media-amazon.com/images/M/MV5BMTc2MzY0NDAwOF5BMl5BanBnXkFtZTcwMTE1Mzc4OA@@._V1_.jpg'
    },
      {
        'id': 8,
        'Title':'John_Wick',
        'Year':'2014',
        'Director':'Chad Stahelski',
        'Genre':'Action',
        'Synopsis':"John Wick, a former hitman, is confronted by mobster Viggo Tarazov, who offers a reward to whoever manages to end Wick's life.",
        'Poster': 'https://http2.mlstatic.com/D_NQ_NP_637824-MLA40163107899_122019-O.jpg'
    },
    {
        'id': 9,
        'Title':'Numb',
        'Year':'2009',
        'Director':'Jason Goode',
        'Genre':'Drama',
        'Synopsis':'A chronically depressed screenwriter desperately tries to cure his condition when he meets the girl of his dreams.',
        'Poster': 'https://pics.filmaffinity.com/Numb-377509483-large.jpg'
    }
]


@app.route("/",methods=["GET"])
def front_page():
    return "Main Site"

@app.route("/movies",methods=["GET"])
def return_movies():
    return jsonify(movies)

@app.route("/movies/<Title>",methods=["GET"])
def return_title(Title):
    for movie in movies:
        if movie["Title"] == Title:
            return jsonify(movie), HTTPStatus.OK
    return jsonify({}), HTTPStatus.NOT_FOUND

@app.route("/movies", methods=["POST"])
def create_movie():
    # recibir datos por parte del usuario
    new_movie = request.get_json()
    last_id = [x['id'] for x in movies]
    new_id = max(last_id) + 1

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

@app.route("/movies/list/<string:dir_gr>", methods=["GET"])
def genres_directors(dir_gr):
    return jsonify(list_of_values(dir_gr))


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


app.run()
