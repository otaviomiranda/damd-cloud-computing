package br.pucminas.awslambda;

public class ResponseClass {

    boolean found;
    String message;

    public ResponseClass(boolean found, String message) {
        this.found = found;
        this.message = message;
    }

    public ResponseClass() {
    }

    public String getResponseString() {
        return message;
    }




}
