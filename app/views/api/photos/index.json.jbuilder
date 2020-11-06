json.array! @photos do |photo|
  json.extract! photo, :id, :title, :user_id
  json.photoUrl url_for(photo.image)
end