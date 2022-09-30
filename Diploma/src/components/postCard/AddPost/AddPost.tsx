import React from "react";

import ImageUploading, {
  ImageListType,
  ImageUploadingPropsType,
} from "react-images-uploading";

import { createPost } from "../../../api/create-post";

import './addPostStyle.css';
import './uploadImageStyle.css';

const maxNumber = 1;
export const AddPost = () => {

  const [title, setTitle] = React.useState("");
  const [text, setText] = React.useState("");
  const [lessonNum, setLessonNum] = React.useState(0);
  const [images, setImages] = React.useState<ImageListType>([]);
  const onChange: ImageUploadingPropsType["onChange"] = (imageList) => {
    setImages(imageList);
  };
  const handleSubmit = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();
  };


  return (
    <div className="containerAddPost">
      <div className="wrapperAddPost">
        <div className="formAddPost">
          <div className="wrapper_Label_Input-AddPost">
            <label className="labelAddPost" htmlFor="title">Title</label>
            <input className="inputAddPost"
              placeholder="Your Title"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="wrapper_Label_Input-AddPost">
            <label className="labelAddPost" htmlFor="text">Text</label>
            <input className="inputAddPost"
              placeholder="Your Text"
              id="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </div>
          <div className="wrapper_Label_Input-AddPost">
            <label className="labelAddPost" htmlFor="lessonNum">Lesson Number</label>
            <input className="inputAddPost"
              placeholder="Lesson Number"
              type="number"
              id="lessonNum"
              value={lessonNum}
              onChange={(e) => setLessonNum(Number(e.target.value))}
            />
          </div>
          
          <ImageUploading
            multiple
            value={images}
            onChange={(...args) => {
              console.log(args);
              onChange(...args);
            }}
            maxNumber={maxNumber}
          >
            {({
              imageList,
              onImageUpload,
              onImageRemoveAll,
              onImageUpdate,
              onImageRemove,
              isDragging,
              dragProps,
            }) => (


              <form className="file-uploader"
                onSubmit={handleSubmit}
              >
                <button
                  className='buttonClickOrDrop'
                  style={isDragging ? { color: "red" } : undefined}
                  onClick={onImageUpload}

                  // type="button"
                  {...dragProps}
                >
                  Click or Drop here
                </button>

                {imageList.map((image, index) => (
                  <div key={index}>

                    <img className="imageSize" src={image.dataURL} alt="#" />
                    <div className="wrapperUpdateRemoveImage">
                      <button className="buttonUpdateRemoveImage" type="button"
                        onClick={() => onImageUpdate(index)}>Update</button>
                      <button className="buttonUpdateRemoveImage"
                        onClick={() => onImageRemove(index)}>Remove</button>
                    </div>
                  </div>
                ))}
              </form>
            )}
          </ImageUploading>

          <button className="submitButtonAddPost" type="button"
            onClick={() => {
              const currentImage = images[0].file;
              currentImage &&
                createPost(currentImage, text, lessonNum, title)
                  .then((post) => console.log(post))
                  .catch((err) => console.dir(err));
            }}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};