"use client";
import { useState, useEffect } from 'react';
import * as tf from '@tensorflow/tfjs';
import '@tensorflow/tfjs-backend-cpu';
import '@tensorflow/tfjs-backend-webgl';
import './card.css';
import Link from 'next/link';


export default function Home() {
  const [model, setModel] = useState(null);
  const [image, setImage] = useState(null);
  const [prediction, setPrediction] = useState(null);

  // Cargar el modelo al montar el componente
  useEffect(() => {
    async function loadModel() {
      const modelUrl = `${window.location.origin}/model/model.json`;
      const model = await tf.loadLayersModel(modelUrl);
      setModel(model);
      console.log('Modelo cargado');
    }
    loadModel();
  }, []);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {  // Verifica que file no sea undefined
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const classifyImage = async () => {
    if (!model || !image) return;
  
    const imgElement = document.createElement('img');
    imgElement.src = image;
    imgElement.onload = () => {
      const tensor = tf.browser.fromPixels(imgElement)
        .resizeNearestNeighbor([128, 128])  // si usas modelo antiguo Cambia el tamaño a 150x150
        .toFloat()
        .expandDims();
      const prediction = model.predict(tensor);
      prediction.array().then(result => {
        setPrediction(result);
        console.log(result);
      });
    };
  };

  const getResult = () => {
    if (prediction) {        //modelo antiguo:https://github.com/diegoperea20/clasificacion_de_imagenes_Tensorflow
      if (JSON.stringify(prediction) === JSON.stringify([[0, 1]])) {
        return "Dog";   //Con modelo antiguo return "Cat" 
      } else if (JSON.stringify(prediction) === JSON.stringify([[1, 0]])) { 
        return "Cat";   //Con modelo antiguo return "Dog"
      } else {
        return "Unknown";
      }
    }
    return "";
  };
  return (
    <div>
      <h1>Cat and Dog Image Classifier</h1>
      <div className="e-card playing">
        <div className="wave"></div>

        <div className="infotop">
        <input type="file" accept="image/*" onChange={handleImageUpload} />
        {image && <img src={image} alt="Uploaded" width="224" height="224" />}
          <br />
          <button onClick={classifyImage}>Classify</button>
          {prediction && <div>Result: {getResult()}</div>}
          <br />
          
        </div>
        
      </div>
      <div className="project-github">
        <p>This project is in </p>
        <Link href="https://github.com/diegoperea20/Nextjs-classification-cats-and-dogs-with-tensorflowjs"><img width="96" height="96" src="https://img.icons8.com/fluency/96/github.png" alt="github"/></Link>
      
      </div>

    </div>
   
  );
}
