// import {db} from "../db"

// export default async function handler(req, res) {
//     if (req.method === 'GET') {
//       // Example response
//       try {
//         // Example query to fetch all rows from a "users" table
//         const [rows] = await db.query('SELECT * FROM books');
//         res.status(200).json(rows);
//       } catch (error) {
//         console.error('Database error:', error);
//         res.status(500).json({ error: 'Failed to load data' });
//       }
//     } else {
//       // Return 405 for other methods
//       res.setHeader('Allow', ['GET']);
//       res.status(405).end(`Method ${req.method} Not Allowed`);
//     }
//   }