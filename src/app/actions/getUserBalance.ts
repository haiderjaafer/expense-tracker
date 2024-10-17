'use server';
import { db } from '@/lib/db';
import { auth } from '@clerk/nextjs/server';

async function getUserBalance(): Promise<{
  balance?: number;
  error?: string;
}> {
  const { userId } = auth();

  if (!userId) {
    return { error: 'User not found' };
  }

  try {
    const transactions = await db.transaction.findMany({
      where: { userId },  // samr name userId in db and from userId clerk above const { userId } = auth();
    });

    const balance = transactions.reduce(  // take function
      (sum, transaction) => sum + transaction.amount,
      0   // starting point 
    );

    

    return { balance };
  } catch (error) {
    return { error: 'Database error' };
  }
}

export default getUserBalance;