import './App.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import image from './assets/people.png';
import MaleIcon from '@mui/icons-material/Male';
import FemaleIcon from '@mui/icons-material/Female';

function App() {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBmi] = useState('0');
  const [bmiCategory, setBmiCategory] = useState('');
  const [gender, setGender] = useState('male');
  const [healthTip, setHealthTip] = useState('');

  const healthTips = {
    'Underweight': 'You are underweight. Consider incorporating nutrient-dense foods and consult with a healthcare provider for personalized advice.',
    'Healthy': 'You have a healthy weight. Maintain your current lifestyle and balanced diet to stay healthy.',
    'Overweight': 'You are overweight. Regular physical activity and a balanced diet can help manage your weight. Consider consulting a healthcare provider for personalized advice.',
    'Obese': 'You are in the obese range. It is important to seek medical advice to manage your weight effectively through diet and exercise.'
  };

  const calculateBmi = (e) => {
    e.preventDefault();
    if (height && weight) {
      const bmiValue = (weight / ((height / 100) ** 2)).toFixed(2);
      setBmi(bmiValue);
      let category = '';
      if (bmiValue < 18.5) {
        category = 'Underweight';
      } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
        category = 'Healthy';
      } else if (bmiValue >= 25 && bmiValue <= 29.9) {
        category = 'Overweight';
      } else {
        category = 'Obese';
      }
      setBmiCategory(category);
      setHealthTip(healthTips[category]);
    } else {
      alert('Please enter valid height and weight');
    }
  };

  const resetForm = () => {
    setHeight('');
    setWeight('');
    setBmi('0');
    setBmiCategory('');
    setHealthTip('');
  };

  const handleGenderSwitch = (newGender) => {
    setGender(newGender);
    resetForm();
  };

  return (
    <div className="container-fluid backk">
      <div className="row">
        <div className="col-md-2"></div>
        <div className="col-md-4 mt-5">
          <div className="text-dark p-4 rounded">
            <div className="mb-4">
              <h1 className="title">BMI Calculator</h1>
              <p className="subtitle">Calculate your Body Mass Index (BMI)</p>
            </div>
            <div className="d-flex mb-3">
              <Button
                className={gender == 'male' ? 'gradient-male' : 'outline-button'}
                style={{ height: '50px', width: '160px' }}
                variant={gender == 'male' ? 'contained' : 'outlined'}
                onClick={() => handleGenderSwitch('male')}
                startIcon={<MaleIcon />}
              >
                Male
              </Button>&nbsp;&nbsp;
              <Button
                className={gender == 'female' ? 'gradient-female' : 'outline-button'}
                style={{ height: '50px', width: '160px' }}
                variant={gender == 'female' ? 'contained' : 'outlined'}
                onClick={() => handleGenderSwitch('female')}
                startIcon={<FemaleIcon />}
              >
                Female
              </Button>
            </div>
            <form className="mt-4" onSubmit={calculateBmi}>
              <div className="mb-3">
                <TextField 
                  id="height" 
                  label="Height (cm)" 
                  value={height} 
                  variant="outlined" 
                  className={`input-field w-100 mt-3 ${gender === 'female' ? 'female-input' : ''}`} 
                  onChange={(e) => setHeight(e.target.value)} 
                  InputLabelProps={{ className: 'input-label' }}
                />
              </div>
              <div className="mb-3">
                <TextField 
                  id="weight" 
                  label="Weight (kg)" 
                  value={weight} 
                  variant="outlined" 
                  className={`input-field w-100 my-3 ${gender == 'female' ? 'female-input' : ''}`} 
                  onChange={(e) => setWeight(e.target.value)} 
                  InputLabelProps={{ className: 'input-label' }}
                />
              </div>
              <div className="d-flex justify-content-between">
                <Button 
                  type="submit" 
                  variant="contained" 
                  className="w-100 me-2" 
                  style={{ backgroundColor: '#ffff', color: 'black', boxShadow: 'none', height: '60px', fontWeight:'400'}}
                >
                  Calculate BMI
                </Button>
                <Button 
                  variant="outlined" 
                  className="w-100 ms-2" 
                  style={{ borderColor:"white", color: 'white', boxShadow: 'none', height: '60px', }} 
                  onClick={resetForm}
                >
                  Reset
                </Button>
              </div>
            </form>
          </div>
        </div>
        <div className="col-md-1"></div>
        <div className="col-md-3 bakk"></div>
        <div className="col-md-2"></div>
      </div>
      <div className='row' style={{ background: 'white', height: '20%' }}>
        <div className="col-md-2"></div>
        <div className="col-md-2">
          <div className="mt-4">
            <h3 className='BMI'>Your BMI Score</h3>
            <h1 className='bmicount'>{bmi}</h1>
          </div>
        </div>
        <div className="col-md-3 mt-4">
          <h3>{bmiCategory}</h3>
          <p>{healthTip}</p>
        </div>
        <div className="col-md-5"></div>
      </div>
      <img src={image} alt="People" className="imge" />
    </div>
  );
}

export default App;
