import axios from 'axios';

export class RequestServer {
    static url = 'https://pixabay.com/api/';
    params = {
        key: '35924864-f3fb2dd1b54948d4d3d2418cb',
        q: '',
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: 'true',
        page: 0,
        per_page: 40
    };
    onRequestServer(query = this.params.q) {
        this.params.q = query;
        this.params.page += 1;
        return axios.get(RequestServer.url, { params: this.params });
}  
}