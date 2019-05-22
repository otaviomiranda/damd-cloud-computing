package br.pucminas.awslambda;

public class RequestClass {
    double lat;
    double lng;

    public RequestClass(double lat, double lng) {
        this.lat = lat;
        this.lng = lng;
    }

    public RequestClass() {
    }


}
