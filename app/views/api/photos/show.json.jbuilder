json.photo do
  json.id @photo.id
  json.title @photo.title
  json.description @photo.description
  json.photoUrl url_for(@photo.image)
  json.owner @photo.user
  
end

