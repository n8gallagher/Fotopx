json.extract! user, :id, :username
json.profileImage user.profile_image.attached? ? url_for(user.profile_image) : "https://fotopx-dev.s3-us-west-1.amazonaws.com/profile-default.png"
json.coverImage user.cover_image.attached? ? url_for(user.cover_image) : "https://fotopx-dev.s3-us-west-1.amazonaws.com/default-cover.png"
json.user user