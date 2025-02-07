import mongoose from 'mongoose'

export const connectToDB = async () => {
  const connection = {}
  try {
    if (connection.isConnected) return
    const db = await mongoose.connect(process.env.MONGO)
    connection.isConnected = db.connections[0].readyState
  } catch (error) {
    console.log('TLOG ~ error:', error)
    throw new Error(error)
  }
}
