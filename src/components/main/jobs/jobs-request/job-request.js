export default class JobRequest {

    async getResource(url) {
        const res = await fetch(url);
    
        if (!res.ok) {
          throw new Error(`Could not fetch ${url}` +
            `, received ${res.status}`)
        }
        return await res.json();
    }

    async getAllJobs({pageNumber, searchValues}) {

        let url = `http://api.jobka.net:8081/jobs?page=${pageNumber}`;

        if(searchValues !== undefined &&
            searchValues.position !== undefined &&
            searchValues.position.value !== undefined &&
            searchValues.position.value !== ''
        ) {
            url += `&position=${searchValues.position.value}`;
        }

        if(searchValues !== undefined &&
            searchValues.location !== undefined &&
            searchValues.location.value !== undefined &&
            searchValues.location.value !== ''
        ) {
            url += `&location=${searchValues.location.value}`;
        }

        if(searchValues !== undefined &&
            searchValues.company !== undefined &&
            searchValues.company.value !== undefined &&
            searchValues.company.value !== ''
        ) {
            url += `&company=${searchValues.company.value}`;
        }

        url += `&sortBy=date`;
        
        return await this.getResource(url);
    }
}