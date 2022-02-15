from flask import Flask,jsonify,request
from http import HTTPStatus

app = Flask(__name__)

movies = [
    {
        'Title':'Numb',
        'Year':'2009',
        'Director':'Jason Goode',
        'Genre':'Drama',
        'Synopsis':'A chronically depressed screenwriter desperately tries to cure his condition when he meets the girl of his dreams.'
    },
    {
        'Title':'Breakfast_Club',
        'Year':'1985',
        'Director':'John Hughes',
        'Genre':'Drama',
        'Synopsis':'Five high school students find themselves in school detention on Saturday and discover that they have a lot more in common than they thought.'
    },
      {
        'Title':'Jurassic_Park',
        'Year':'1993',
        'Director':'Steven Spielberg',
        'Genre':'Sci fi/Adventure',
        'Synopsis':'Thanks to DNA fossilized in amber, John Hammond brings to life various species of dinosaurs and creates Jurassic Park, a theme park on an island in Costa Rica. But what seemed like a dream quickly turns into a nightmare.'
    },
      {
        'Title':'Mulholland_Drive',
        'Year':'2001',
        'Director':'David Lynch',
        'Genre':'Suspense/Mystery',
        'Synopsis':'After an accident on Mulholland Drive, an amnesiac woman and an aspiring actress travel through Los Angeles searching for answers on a journey beyond dreams and reality.'
    },
      {
        'Title':'In_the_Mood_for_Love',
        'Year':'2000',
        'Director':'Wong Kar-wai',
        'Genre':'Romantic/Drama',
        'Synopsis':'Two neighbors form a strong bond after they both suspect extramarital activities by their spouses. However, they agree to keep their platonic bond so as not to make similar mistakes.'
    },
      {
        'Title':'Breakfast_Club',
        'Year':'1985',
        'Director':'John Hughes',
        'Genre':'Drama',
        'Synopsis':'Five high school students find themselves in school detention on Saturday and discover that they have a lot more in common than they thought.'
    },
      {
        'Title':'Breakfast_Club',
        'Year':'1985',
        'Director':'John Hughes',
        'Genre':'Drama',
        'Synopsis':'Five high school students find themselves in school detention on Saturday and discover that they have a lot more in common than they thought.'
    },
      {
        'Title':'Breakfast_Club',
        'Year':'1985',
        'Director':'John Hughes',
        'Genre':'Drama',
        'Synopsis':'Five high school students find themselves in school detention on Saturday and discover that they have a lot more in common than they thought.'
    },
      {
        'Title':'Breakfast_Club',
        'Year':'1985',
        'Director':'John Hughes',
        'Genre':'Drama',
        'Synopsis':'Five high school students find themselves in school detention on Saturday and discover that they have a lot more in common than they thought.'
    },
      {
        'Title':'Breakfast_Club',
        'Year':'1985',
        'Director':'John Hughes',
        'Genre':'Drama',
        'Synopsis':'Five high school students find themselves in school detention on Saturday and discover that they have a lot more in common than they thought.'
    },

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
from operator import methodcaller
from flask import Flask,jsonify,request
from http import HTTPStatus

app = Flask(__name__)

movies = [
    {
        'Title':'Numb',
        'Year':'2009',
        'Director':'Jason Goode',
        'Genre':'Drama',
        'Synopsis':'A chronically depressed screenwriter desperately tries to cure his condition when he meets the girl of his dreams.'
    },
    {
        'Title':'Breakfast_Club',
        'Year':'1985',
        'Director':'John Hughes',
        'Genre':'Drama',
        'Synopsis':'Five high school students find themselves in school detention on Saturday and discover that they have a lot more in common than they thought.'
    },
      {
        'Title':'Jurassic_Park',
        'Year':'1993',
        'Director':'Steven Spielberg',
        'Genre':'Sci fi/Adventure',
        'Synopsis':'Thanks to DNA fossilized in amber, John Hammond brings to life various species of dinosaurs and creates Jurassic Park, a theme park on an island in Costa Rica. But what seemed like a dream quickly turns into a nightmare.'
    },
      {
        'Title':'Mulholland_Drive',
        'Year':'2001',
        'Director':'David Lynch',
        'Genre':'Suspense/Mystery',
        'Synopsis':'After an accident on Mulholland Drive, an amnesiac woman and an aspiring actress travel through Los Angeles searching for answers on a journey beyond dreams and reality.'
    },
      {
        'Title':'In_the_Mood_for_Love',
        'Year':'2000',
        'Director':'Wong Kar-wai',
        'Genre':'Romantic/Drama',
        'Synopsis':'Two neighbors form a strong bond after they both suspect extramarital activities by their spouses. However, they agree to keep their platonic bond so as not to make similar mistakes.'
    },
      {
        'Title':'Breakfast_Club',
        'Year':'1985',
        'Director':'John Hughes',
        'Genre':'Drama',
        'Synopsis':'Five high school students find themselves in school detention on Saturday and discover that they have a lot more in common than they thought.'
    },
      {
        'Title':'Breakfast_Club',
        'Year':'1985',
        'Director':'John Hughes',
        'Genre':'Drama',
        'Synopsis':'Five high school students find themselves in school detention on Saturday and discover that they have a lot more in common than they thought.'
    },
      {
        'Title':'Breakfast_Club',
        'Year':'1985',
        'Director':'John Hughes',
        'Genre':'Drama',
        'Synopsis':'Five high school students find themselves in school detention on Saturday and discover that they have a lot more in common than they thought.'
    },
      {
        'Title':'Breakfast_Club',
        'Year':'1985',
        'Director':'John Hughes',
        'Genre':'Drama',
        'Synopsis':'Five high school students find themselves in school detention on Saturday and discover that they have a lot more in common than they thought.'
    },
      {
        'Title':'Breakfast_Club',
        'Year':'1985',
        'Director':'John Hughes',
        'Genre':'Drama',
        'Synopsis':'Five high school students find themselves in school detention on Saturday and discover that they have a lot more in common than they thought.'
    },

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
        #else:
            #return jsonify({}), HTTPStatus.NOT_FOUND
        # ARREGLAR : Al agregar ese else, solo devuelve la primer pelicula y el resto las devuelve vacias (por el return jsonify({}))

@app.route("/movies", methods=["POST"])
def crear_pelicula():
    # recibir datos por parte del usuario
    new_movie = request.get_json()
    if "Title" and "Year" and "Director" and "Genre" and "Synopsis" in new_movie:
        movies.append({
            "Title" : new_movie["Title"],
            "Year" : new_movie["Year"],
            "Director": new_movie["Director"],
            "Genre": new_movie["Genre"],
            "Synopsis": new_movie["Synopsis"]
        })
        return jsonify({}), HTTPStatus.OK
    else:
        return jsonify({}), HTTPStatus.BAD_REQUEST

app.run()
