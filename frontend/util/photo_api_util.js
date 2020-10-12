

export const fetchPhotos = () => (
    $.ajax({
        url: "/api/photos"
    })
)

export const fetchPhoto = id => (
    $.ajax({
        url: `/api/photos/${id}`,
    })
);   