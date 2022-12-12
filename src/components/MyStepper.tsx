import { Step, StepLabel, stepLabelClasses, Stepper, Typography } from '@mui/material';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';
import { styled } from '@mui/material/styles';
import { Box } from '@mui/system';
import ArrowLeft from '../assets/icon_chevron-left.png';
import ArrowRight from '../assets/icon_chevron-right.png';
import MyButton from './MyButton';
import checkmark from '../assets/checkmark.png'

import GroupAddIcon from '@mui/icons-material/GroupAdd';
import SettingsIcon from '@mui/icons-material/Settings';
import VideoLabelIcon from '@mui/icons-material/VideoLabel';
import { StepIconProps } from '@mui/material/StepIcon';

type Props = {
  step: number;
  handleNext: () => void;
  handleBack: () => void;
  isLastStep: () => boolean;
  isStepCompleted: () => boolean;
  isFirstStep: () => boolean;
}

const steps = [
  'Welcome',
  'Connect your Shopify store',
  'Connect your customer support email',
  'Done',
]

const MyConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.root}`]: {
    margin: '0 0 0 15px'
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      background:
        '#32ABF2',
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      background:
        '#32ABF2',
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 48,
    width: 2,
    border: 0,
    backgroundColor: '#5D7FA3',
  },
}));



const ColorlibStepIconRoot = styled('div')<{
  ownerState: { completed?: boolean; active?: boolean, };
}>(({ theme, ownerState }) => ({
  backgroundColor: 'transparent',

  border: '2px solid #5D7FA3',
  color: '#fff',
  width: 32,
  height: 32,
  display: 'flex',
  borderRadius: '50%',
  justifyContent: 'center',
  alignItems: 'center',
  ...(ownerState.active && {
    background: '#32ABF2',
    border: 'none',
  }),
  ...(ownerState.completed && {
    background: '#32ABF2',
    border: 'none',
  }),
}));

function ColorlibStepIcon(props: StepIconProps) {
  const { active, completed, className } = props;

  return (
    <ColorlibStepIconRoot ownerState={{ completed, active }} className={className}>
      {(completed || active) && <img src={checkmark} />}
    </ColorlibStepIconRoot>
  );
}

const MyStepper = ({ step, handleBack, handleNext, isLastStep, isStepCompleted: isStepCompleted, isFirstStep }: Props) => {
  return (
    <Box>
      <Stepper connector={<MyConnector />} activeStep={step} orientation='vertical'>
        {
          steps.map(step =>
            <Step key={step} >
              <StepLabel sx={{ padding: 0, }} StepIconComponent={ColorlibStepIcon} >
                <Typography variant='body1'>
                  {step}
                </Typography>
              </StepLabel>
            </Step>
          )
        }

      </Stepper>
      <Box display='flex' mt={6} justifyContent='space-between' >
        <MyButton disabled={isFirstStep()} startIcon={<img src={ArrowLeft} />} onClick={handleBack}>
          Prev
        </MyButton>
        {
          isLastStep() || <MyButton disabled={!isStepCompleted()} endIcon={<img src={ArrowRight} />} onClick={handleNext}>
            Next
          </MyButton>
        }
      </Box>
    </Box>
  )
}

export default MyStepper