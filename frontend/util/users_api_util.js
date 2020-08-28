export const fetchUser = userId => (
    $.ajax({
        url: `/api/p/${userId}`
    })
);