
import axios from 'axios';

export default async function handler(req, res) {
  try {
    const pdfUrl = "https://africau.edu/images/default/sample.pdf";
    const response = await axios.get(pdfUrl, { responseType: 'arraybuffer' });
    res.setHeader('Content-Type', 'application/pdf');
    res.send(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error fetching the PDF');
  }
}
