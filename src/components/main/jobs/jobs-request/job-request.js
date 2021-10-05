export default class JobRequest {

    async getResource(url) {
        const res = await fetch(url);
    
        if (!res.ok) {
          throw new Error(`Could not fetch ${url}` +
            `, received ${res.status}`)
        }
        return await res.json();
    }

    async getAllJobs(page) {
        return await this.getResource(`http://api.jobka.net:8081/jobs?page=${page}`);
    }
}