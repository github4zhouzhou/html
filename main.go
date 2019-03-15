package main

import (
	"fmt"
	"io"
	"log"
	"net/http"
	"os"
	"path/filepath"
)

func main() {
	http.Handle("/css/", http.FileServer(http.Dir("html")))
	http.Handle("/js/", http.FileServer(http.Dir("html")))
	http.Handle("/", http.FileServer(http.Dir("html")))

	//http.HandleFunc("/index", index)
	//http.HandleFunc("/bootstrap", index)
	http.HandleFunc("/upload_file", upload)

	http.ListenAndServe("0.0.0.0:8765", nil)
}

func index(w http.ResponseWriter, r *http.Request) {

}

func upload(w http.ResponseWriter, r *http.Request) {

	fmt.Println("upload file")

	// 10M
	r.ParseMultipartForm(1024 * 1024 * 10)
	fmt.Println("form:", r.Form)

	file, handle, err := r.FormFile("file_n")
	if err != nil {
		fmt.Println(err)
		return
	}
	defer file.Close()

	dir, err := filepath.Abs(filepath.Dir(os.Args[0]))
	if err != nil {
		log.Fatal(err)
	}
	fmt.Println(dir)

	//fileSave := "/private/var/tmp/" + handle.Filename
	fileSave := handle.Filename
	//打开 已只读,文件不存在创建 方式打开  要存放的路径资源
	f, fErr := os.OpenFile(fileSave, os.O_WRONLY|os.O_CREATE, 0666)
	if fErr != nil {
		fmt.Fprintf(w, "file open fail:%s", fErr)
	}
	defer f.Close()

	// 文件 copy
	_, copyErr := io.Copy(f, file)
	if copyErr != nil {
		fmt.Fprintf(w, "file copy fail:%s", copyErr)
	}

	fmt.Fprintf(w, fileSave)

}
