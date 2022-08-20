export function fetchImage(nextName, page) {
    return fetch(
    `https://pixabay.com/api/?page=${page}&key=28421542-cf6e39e982023e61859492efc&image_type=photo&orientation=horizontal&per_page=12&q=${nextName}`
)
    .then(res => {
        if (res.ok) {
        return res.json();
    }
    return Promise.reject(new Error('Not found this images'));
    })
    .then(data => data.hits)
    .catch(error => console.log(error));
}