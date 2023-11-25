// Define interface MajorCredits
interface MajorCredits {
    credits: number;
    brand: string;
  }
  
  // Define interface MinorCredits
  interface MinorCredits {
    credits: number;
    brand: string;
  }
  
  // Function to sum major credits
  function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
    const sum: MajorCredits = {
      credits: subject1.credits + subject2.credits,
      brand: 'MajorCreditsSum',
    };
    return sum;
  }
  
  // Function to sum minor credits
  function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
    const sum: MinorCredits = {
      credits: subject1.credits + subject2.credits,
      brand: 'MinorCreditsSum',
    };
    return sum;
  }
  
  // Example usage
  const majorSubject1: MajorCredits = { credits: 3, brand: 'Math' };
  const majorSubject2: MajorCredits = { credits: 4, brand: 'Physics' };
  
  const minorSubject1: MinorCredits = { credits: 2, brand: 'History' };
  const minorSubject2: MinorCredits = { credits: 1, brand: 'Art' };
  
  const resultMajor = sumMajorCredits(majorSubject1, majorSubject2);
  const resultMinor = sumMinorCredits(minorSubject1, minorSubject2);
  
  console.log(resultMajor); // Output: { credits: 7, brand: 'MajorCreditsSum' }
  console.log(resultMinor); // Output: { credits: 3, brand: 'MinorCreditsSum' }
  