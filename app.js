var responseData = {
    "errors": [],
    "hearts": {
        "assessments": {
            "blood_pressure": {
                "code": "BP-ELEVATED",
                "eval" : "Elevated",
                "color" : "amber",
                "output": {
                    "code": "Elevated",
                    "color": "green",
                    "type": "Mildly elevated"
                },
                "target": "120/80",
                "value": "128/85",
                "message" : "Blood Pressure is slightly raised. Focus on diet and lifestyle."
            },
            "body_composition": {
                "bmi": {
                    "code": "BMI-2",
                    "output": {
                        "code": "Normal Range",
                        "color": "green",
                        "type": "Weight in normal range"
                    },
                    "target": "18.5-24.9",
                    "value": "24.69"
                },
                "body_fat": {
                    "code": "BFT-OVERWEIGHT",
                    "output": {
                        "code": "Overweight Range",
                        "color": "amber",
                        "type": "body fat % in the overweight range for gender and age"
                    },
                    "target": "13%-25%",
                    "value": "25.0%",
                    "message" : ""
                },
                "waist_circ": {
                    "code": "WST-NORMAL",
                    "output": {
                        "code": "Healthy Range",
                        "color": "green",
                        "type": "healthy level"
                    },
                    "target": "< 102 cm",
                    "value": "100 cm",
                    "message" : ""

                },
                "whr": {
                    "code": "WHR-HIGH",
                    "eval" : "Abnormal",
                    "tfl_color" : "amber",
                    "output": {
                        "code": "abnormal",
                        "color": "amber",
                        "type": "Abnormal waist hip ratio"
                    },
                    "target": "0.90",
                    "value": "1.11",
                    "message" : ""
                },
                'message' : 'Weight control needed. See Lifestyle modification advice recommendations'
            },
            "cholesterol": {
                "hdl": {
                    "code": "",
                    "output": {
                        "code": "",
                        "color": "",
                        "type": ""
                    },
                    "target": "",
                    "value": ""
                },
                "ldl": {
                    "code": "",
                    "output": {
                        "code": "",
                        "color": "",
                        "type": ""
                    },
                    "target": "",
                    "value": ""
                },
                "tg": {
                    "code": "",
                    "output": {
                        "code": "",
                        "color": "",
                        "type": ""
                    },
                    "target": "",
                    "value": ""
                },
                "total_cholesterol": {
                    "code": "CHOL-ELEVATED-WITH-HIGH-CVD-RISK",
                    "output": {
                        "code": "Elevated",
                        "color": "amber",
                        "type": "Elevated cholesterol and high CVD risk"
                    },
                    "target": "<5mmol/L",
                    "value": "5.6mmol/L",
                    "message" : "Maintain a good diet and regular exercise to lower your cholesterol. Manage according to your CVD risk"
                }
            },
            "cvd": {
                "code": "CVD-6",
                "output": {
                    "code": "Moderate Risk",
                    "color": "amber",
                    "type": "You are at moderate risk"
                },
                "target": "should mildly lower cvd risk",
                "value": "10-20%",
                "message" : "Your risk is elevated. Discuss with the doctor appropriate follow up"
            },
            "diabetes": {
                "code": "DM-EXISTING-WELL-CONTROLLED",
                "output": {
                    "code": "Good control",
                    "color": "green",
                    "type": "History of DM"
                },
                "target": "4.0-6.5%",
                "value": "5.7%",
                "message" : "You have a history of diabetes. You blood sugar is well controlled"
            },
            "lifestyle": {
                "alcohol": {
                    "code": "AL-3",
                    "output": {
                        "code": "",
                        "color": "",
                        "type": ""
                    },
                    "target": "<1 units/week",
                    "value": "84.0 units"
                },
                "diet": {
                    "fruit": {
                        "code": "FRT-TARGET",
                        "output": {
                            "code": "On target",
                            "color": "green",
                            "type": "Eating sufficient fruit"
                        },
                        "target": ">2 servings/day",
                        "value": "21 servings"
                    },
                    "vegetable": {
                        "code": "VEG-LOW",
                        "output": {
                            "code": "Below target",
                            "color": "amber",
                            "type": "Low vegetable consumption"
                        },
                        "target": "5 or more servings/day",
                        "value": "21 servings"
                    }
                },
                "physical_activity": {
                    "code": "PA-TARGET",
                    "output": {
                        "code": "On target",
                        "color": "green",
                        "type": "Meeting physical activity targets"
                    },
                    "target": ">150 minutes",
                    "value": "560 minutes"
                },
                "smoking": {
                    "code": "SM-NON-SMOKER",
                    "output": {
                        "code": "non-smoker",
                        "color": "green",
                        "type": "Non Smoker"
                    },
                    "target": "no",
                    "value": "non smoker"
                }
            }
        },
        "goals": [],
        "meta": {
            "algorithm": "Hearts Algorithm",
            "request_id": "7acb43ba-4745-4433-9040-c877d95ed200"
        },
        "recommendations": {
            "followup": {
                "actions": [
                    {
                        "goal": "History of DM",
                        "messages": [
                            "Existing diagnosis of Diabetes. Review management"
                        ]
                    },
                    {
                        "goal": "Mildly elevated",
                        "messages": [
                            "BP is slightly raised. Focus on diet and lifestyle"
                        ]
                    },
                    {
                        "goal": "You are at moderate risk",
                        "messages": [
                            "Your risk of a CVD event is mild"
                        ]
                    }
                ]
            },
            "lifestyle": {
                "actions": [
                    {
                        "goal": "Stop Smoking",
                        "messages": [
                            "Quitting is the best thing you can do for your overall health and to reduce your risk of lung cancer and heart disease. "
                        ]
                    },
                    {
                        "goal": "Reduce Alcohol Consumption",
                        "messages": [
                            "Limit your alcohol intake to 2 standard drinks a day and try to have at least 2 alcohol free days per week."
                        ]
                    },
                    {
                        "goal": "Weight control",
                        "messages": [
                            "Focus on diet and exercise to get your weight under control. Avoid fad diets. Follow the general advice given here."
                        ]
                    },
                    {
                        "goal": "Medical review",
                        "messages": [
                            "Based on your assessment, you should follow up with a doctor. Take this report with you to discuss how to control your CVD risk and improve your overall health."
                        ]
                    },
                ]
            },
            "medications": {
                "actions": [
                    {
                        "goal": "Elevated cholesterol and high CVD risk",
                        "messages": [
                            "Based on Tchol > 5 and high CVD risk, requires medication"
                        ]
                    }
                ]
            }
        }
    }
}

var postData = {
    'config': {
        'algorithm': 'hearts',
        'risk_model': 'whocvd'
    },
    'params': {
        'demographics': {
            'gender': 'male',
            'age': {
                'value': 65,
                'unit': 'year'
            },
            'birth_country': 'Bangladesh',
            'birth_country_code': 'BD',
            'living_country': 'Bangladesh',
            'living_country_code': 'BD',
            'race': 'Bengali',
            'ethnicity': 'Bengali'
        },
        'components': {
            'lifestyle': [
                {
                    'name': 'smoking',
                    'category': 'addiction',
                    'value': 'non-smoker',
                    'quit_within_year': false
                },
                {
                    'name': 'alcohol_history',
                    'category': 'addiction',
                    'value': 12,
                    'units': 'units',
                    'frequency': 'daily'
                },
                {
                    'name': 'fruit',
                    'category': 'nutrition',
                    'value': 3,
                    'units': 'servings',
                    'frequency': 'daily'
                },
                {
                    'name': 'vegetables',
                    'category': 'nutrition',
                    'value': 3,
                    'units': 'servings',
                    'frequency': 'daily'
                },
                {
                    'name': 'exercise',
                    'category': 'physical-activity',
                    'value': 20,
                    'units': 'minutes',
                    'frequency': 'daily',
                    'intensity': 'moderate'
                },
                {
                    'name': 'exercise',
                    'category': 'physical-activity',
                    'value': 30,
                    'units': 'minutes',
                    'frequency': 'daily',
                    'intensity': 'high'
                }
            ],
            'body-measurements': [
                {
                    'effectiveDate': 'timestamp',
                    'name': 'blood_pressure',
                    'category': 'vital-signs',
                    'value': '120/80',
                    'units': 'mmHg',
                    'arm': 'right'
                },
                {
                    'effectiveDate': 'timestamp',
                    'name': 'blood_pressure',
                    'category': 'vital-signs',
                    'value': '130/85',
                    'units': 'mmHg',
                    'arm': 'right'
                },
                {
                    'effectiveDate': 'timestamp',
                    'name': 'blood_pressure',
                    'category': 'vital-signs',
                    'value': '135/90',
                    'units': 'mmHg',
                    'arm': 'right'
                },
                {
                    'effectiveDate': 'timestamp',
                    'name': 'height',
                    'category': 'anthropometry',
                    'units': 'cm',
                    'value': 180
                },
                {
                    'effectiveDate': 'timestamp',
                    'name': 'weight',
                    'category': 'anthropometry',
                    'units': 'kg',
                    'value': 80
                },
                {
                    'effectiveDate': 'timestamp',
                    'name': 'hip',
                    'category': 'anthropometry',
                    'units': 'cm',
                    'value': 90
                },
                {
                    'effectiveDate': 'timestamp',
                    'name': 'waist',
                    'category': 'anthropometry',
                    'units': 'cm',
                    'value': 100
                },
                {
                    'effectiveDate': 'timestamp',
                    'name': 'body-fat',
                    'category': 'anthropometry',
                    'units': '%',
                    'value': 25
                },
                {
                    'effectiveDate': 'timestamp',
                    'name': 'muscle',
                    'category': 'anthropometry',
                    'units': '%',
                    'value': 20
                },
                {
                    'effectiveDate': 'timestamp',
                    'name': 'visceral_fat',
                    'category': 'anthropometry',
                    'units': '%',
                    'value': 10
                }
            ],
            'biological-samples': [
                {
                    'effectiveDate': 'timestamp',
                    'name': 'a1c',
                    'category': 'blood-test',
                    'value': 6.5,
                    'units': '%'
                },
                {
                    'effectiveDate': 'timestamp',
                    'name': 'blood_sugar',
                    'category': 'blood-test',
                    'value': 5.6,
                    'units': 'mmol/L',
                    'type': 'fasting'
                },
                {
                    'effectiveDate': 'timestamp',
                    'name': 'total_cholesterol',
                    'category': 'blood-test',
                    'value': 5.6,
                    'units': 'mmol/L'
                },
                {
                    'effectiveDate': 'timestamp',
                    'name': 'hdl',
                    'category': 'blood-test',
                    'value': 1.3,
                    'units': 'mmol/L'
                },
                {
                    'effectiveDate': 'timestamp',
                    'name': 'ldl',
                    'category': 'blood-test',
                    'value': 1.3,
                    'units': 'mmol/L'
                },
                {
                    'effectiveDate': 'timestamp',
                    'name': 'tg',
                    'category': 'blood-test',
                    'value': 6,
                    'units': 'mmol/L'
                }
            ],
            'medical_history': [
                {
                    'name': 'hypertension',
                    'category': 'condition',
                    'is_active': true
                },
                {
                    'name': 'diabetes',
                    'category': 'condition',
                    'is_active': true
                },
                {
                    'name': 'tuberculosis',
                    'category': 'condition',
                    'is_active': false
                },
                {
                    'category': 'allergy',
                    'type': 'medication',
                    'allergen': 'ace-i',
                    'criticality': '',
                    'reaction': 'cough'
                }
            ],
            'medications': [
                {
                    'generic': 'rampiril',
                    'category': 'anti-hypertensive'
                }
            ],
            'family_history': [
                {
                    'name': 'cardiovascular-disease',
                    'relative': '1st degree'
                }
            ]
        }
    }
};

let axiosConfig = {
  headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin' : 'localhost:5000, *'
  }
};

new Vue({
  el: "#app",
  data () {
    return {
      result: responseData
    }
  }
})

/**
new Vue({
  el: '#app',
  data () {
    return {
      info: null
    }
  },
  mounted () {
    axios.post('http://localhost:9595/api/algorithm', postData, axiosConfig)
      .then((res) => {
        console.log("RESPONSE RECEIVED: ", res);
      })
      .catch((err) => {
        console.log("AXIOS ERROR: ", err);
      })
  }
});
**/
