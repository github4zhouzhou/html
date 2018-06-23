package main

import "net/http"

func main() {
	http.Handle("/css/", http.FileServer(http.Dir("html")))
	http.Handle("/js/", http.FileServer(http.Dir("html")))
	http.Handle("/", http.FileServer(http.Dir("html")))

	// http.HandleFunc("/index", index)
	http.HandleFunc("/bootstrap", index)

	http.ListenAndServe("0.0.0.0:8765", nil)
}

func index(w http.ResponseWriter, r *http.Request) {

}
