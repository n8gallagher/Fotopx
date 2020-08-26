export const fetchPhotos = data => (
    $.ajax({
        url: '/api/photos',
        data
    })
);

export const fetchPhoto = id => (
    $.ajax({
        url: `/api/photos/${id}`,
    })
);   