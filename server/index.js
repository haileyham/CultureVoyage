require('dotenv').config();
const express = require('express');
const axios = require('axios');
const cors = require('cors'); // cors 미들웨어 추가
const app = express();
const PORT = process.env.PORT || 3001;

// CORS 미들웨어를 사용하여 해당 출처 허용
const corsOptions = {
  origin: process.env.CORS_ORIGIN,
};

app.use(cors(corsOptions));

// 루트 경로에 대한 요청 처리
app.get('/', (req, res) => {
  const baseUrl = "http://openapi.seoul.go.kr:8088/";
  const apiKey = process.env.API_KEY;
  const endpoint = "xml/culturalEventInfo/";
  const pageNumber = 1;
  const itemsPerPage = req.query.itemsPerPage;
  const debouncedValue = req.query.debouncedValue;
  const url = `${baseUrl}${apiKey}/${endpoint}${pageNumber}/${itemsPerPage}/%20/${debouncedValue}`;

  axios.get(url)
    .then(response => {
      res.send(response.data);
    })
    .catch(error => {
      console.error('Error fetching data:', error);
      res.status(500).send('Error fetching data');
    });
});

// 서버 시작
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});