public with sharing class HttpCalloutSample {
    public string getCallOutResponse(String url) {
        
        Http h = new Http();
            HTTPRequest req = new HttpRequest();
            req.setEndpoint(url);
            req.setMethod('GET');

            HttpResponse res = h.send(req);
            return res.getBody();
        

    }
}
