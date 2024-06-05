# Nextjs classification cats and dogs with tensorflowjs

<p align="justify">
Nextjs application for classifying images of cats and dogs using tensoflowjs, converting a.h5 model to tensorflowjs that is .json and .bin
</p>

Cat and dog image classification using this [cat_dog_classifier.h5](https://github.com/diegoperea20/clasificacion_de_imagenes_Tensorflow)
to convert it to tensorflowjs ,going from an h5 model to js produces several .bin files and the json model

<p align="center">
  <img src="README-images\step1.PNG" alt="Step1">
</p>
<p align="center">
  <img src="README-images\step2.PNG" alt="Step22">
</p>
<p align="center">
  <img src="README-images\step3.PNG" alt="Step3">
</p>
<p align="center">
  <img src="README-images\step4.PNG" alt="Step4">
</p>

----
Convert h5 to Tensorflowjs in ipynb
```bash
!pip install tensorflowjs
```
```bash
!tensorflowjs_converter --input_format keras /root/to/your/model.h5 /root/to/your/folder/save
```
-----
### Model results  [cat_dog_classifier.h5](https://github.com/diegoperea20/clasificacion_de_imagenes_Tensorflow)

<p align="center">
  <img src="README-images\validation_model.PNG" alt="Step2">
</p>


<p align="justify">
With the evaluation of the model it is in its accuracy and loss
</p>


<p align="center">
  <img src="README-images\loss_graph.PNG" alt="Step2">
</p>

<p align="center">
  <img src="README-images\accuracy_graph.PNG" alt="Step2">
</p>

Fronted Nextjs Options for do it:


This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started
Nodejs version v20.10.0 and Next.js version v14.2.3 

First
```bash
npm install
```
run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Resolve : Error Nextjs Parsing error: Cannot find module 'next/babel'

Put this code in .eslintrc.json 
```bash
{
  "extends": ["next/babel","next/core-web-vitals"]
}
```

Created by [Diego Ivan Perea Montealegre](https://github.com/diegoperea20)