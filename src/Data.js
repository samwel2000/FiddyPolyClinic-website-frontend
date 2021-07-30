import Sliderimg1 from './assets/images/background1.jpg';
import Sliderimg2 from './assets/images/background2.jpg';
import Sliderimg3 from './assets/images/background3.jpg';
import Consultation from './assets/images/consultation.webp';
import Emergency from './assets/images/emergency.webp';
import Pharmacy from './assets/images/pharmacy.webp';
import Laboratory from './assets/images/laboratory.webp';
import Radiology from './assets/images/radiology.webp';
import Medical from './assets/images/medical.webp';
import Member from './assets/images/team_member.webp';
import Doctor from './assets/images/Doctor.webp';
import EventImage from './assets/images/AboutBackground.jpg';


export const phoneNumber = "+255 754 270 725 "

export const Email = "fiddypolyclinic@gmail.com"

export const SliderContent = [
    {
        'id':1,
        'title':'We provide high quality patient-focused health care',
        'image': `${Sliderimg1}`,
        'description':'a clinic where both general and specialist examinations and treatments are available to outpatients.'
    },
    {
        'id':2,
        'title':'We provide top medical and clinical services',
        'image':`${Sliderimg2}`,
        'description':'with specialized clinics such as Physician, Pediatric, Obstetric  and Gynecologist, Surgeon'
    },
    {
        'id':3,
        'title':'Medical services that you can trust',
        'image':`${Sliderimg3}`,
        'description':'We are committed to our standards of service excellence and dedicated to exceeding the expectations of those we serve'
    }
]

export const ServiceContent = [
    {
        'id':1,
        'heading':'Medical councelling',
        'icon': `${Medical}`,
        'description':'we offer consultation services (advice and instruction are provided by health care professional to patients). This service is provided for free at the clinic'
    },
    {
        'id':2,
        'heading':'Qualified doctors',
        'icon': `${Consultation}`,
        'description':'Our clinic has specialized and qualified doctors and staff complied in accordance to MoHCDGEC’s guideline. including Physicians, Pediatrics and Gynecologists'
    },
    {
        'id':3,
        'heading':'Outpatient services',
        'icon': `${Emergency}`,
        'description':'We provide services to outpatients this includes but not limited to emergency services, diagnostics services such as urine and lab-tests and physical therapy'
    },
    {
        'id':4,
        'heading':'Pharmacy',
        'icon': `${Pharmacy}`,
        'description':'the clinic has a dispensing Room which provides pharmaceutical drugs and oversees fullfillment of medical prescription to the community and all patients attending the clinic.'
    },
    {
        'id':5,
        'heading':'Laboratory',
        'icon': `${Laboratory}`,
        'description':'Our clinic has a clinical laboratory where tests are carried out on clinical specimen to obtain information about patients health aiding diagnosis, and treatment of patients.'
    },
    {
        'id':6,
        'heading':'RCH services',
        'icon': `${Radiology}`,
        'description':'We value mothers infants and childrens by providing reproductive and child health services. These include maternal and new born care and more other RCH services'
    }
]

export const TeamMembers = [
    {
        'id':1,
        'name':'Dr. Hafidh Ameir',
        'image': `${Doctor}`,
        'title':'Health consultant'
    },
    {
        'id':2,
        'name':'Samwel Godfrey',
        'image':`${Member}`,
        'title':'Health consultant'
    },
    {
        'id':3,
        'name':'Yusuph Ameir',
        'image':`${Doctor}`,
        'title':'Statistician'
    },
    {
        'id':4,
        'name':'Dr. Hafidh Ameir',
        'image': `${Member}`,
        'title':'Health consultant'
    },
    {
        'id':5,
        'name':'Samwel Godfrey',
        'image':`${Doctor}`,
        'title':'Health consultant'
    },
    {
        'id':6,
        'name':'Yusuph Ameir',
        'image':`${Member}`,
        'title':'Statistician'
    },
    {
        'id':7,
        'name':'Dr. Hafidh Ameir',
        'image': `${Member}`,
        'title':'Health consultant'
    },
    {
        'id':8,
        'name':'Samwel Godfrey',
        'image':`${Doctor}`,
        'title':'Health consultant'
    },
    {
        'id':9,
        'name':'Yusuph Ameir',
        'image':`${Member}`,
        'title':'Statistician'
    }
]


export const JobsAndVacancies = [
    {
        'id':1,
        'jobTitle':'Clinical officers',
        'postNumber': `02 posts`,
        'postedOn':'12-06-2011',
        'description':'Phasellus at nunc orci. Donec ipsum metus, pharetra quis nunc sit amet, maximus vehicula nibh. Praesent pulvinar porta elit, a commodo erat accumsan sed. Vivamus vel tristique nibh.',
        'requirements':['N years of experrience in the field',
                        'Bachelors degree on blah... or any related field',
                        'Experience from known centre',
                        'Knowledge how to work with tools (psdgadg, dsgjd)'],
        'link':'#'
    },
    {
        'id':2,
        'jobTitle':'Lab technicians',
        'postNumber': `10 posts`,
        'postedOn':'12-06-2011',
        'description':'Phasellus at nunc orci. Donec ipsum metus, pharetra quis nunc sit amet, maximus vehicula nibh. Praesent pulvinar porta elit, a commodo erat accumsan sed. Vivamus vel tristique nibh.',
        'requirements':['N years of experrience in the field',
                        'Bachelors degree on blah... or any related field',
                        'Experience from known centre',
                        'Knowledge how to work with tools (psdgadg, dsgjd)'],
        'link':'#'
    },
]


export const EventsAndNews = [
    {
        'id':1,
        'title':'Official launch of fiddy polyclinic',
        'eventImage':`${EventImage}`,
        'altImage':'fiddy polyclinic staffs',
        'category':'News',
        'description':'Phasellus at nunc orci. Donec ipsum metus, pharetra quis nunc sit amet, maximus vehicula nibh. Praesent pulvinar porta elit, a commodo erat accumsan sed. Vivamus vel tristique nibh.'
    },
    {
        'id':2,
        'title':'Official launch of fiddy polyclinic',
        'eventImage':`${EventImage}`,
        'altImage':'fiddy polyclinic staffs',
        'Category':'Event',
        'description':'Phasellus at nunc orci. Donec ipsum metus, pharetra quis nunc sit amet, maximus vehicula nibh. Praesent pulvinar porta elit, a commodo erat accumsan sed. Vivamus vel tristique nibh.'
    }
]
