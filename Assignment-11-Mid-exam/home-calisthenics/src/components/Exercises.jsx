import pushupCardImage from '/images/exercise-card-images/pushups-illustration.jpg'
import bandAssistedPullupsCardImage from '/images/exercise-card-images/band-assisted-pull-ups-2.jpg'
import squatsCardImage from '/images/exercise-card-images/squats-illustration-3.jpg'

import diamondPushupCardImage from '/images/exercise-card-images/diamond-pushup.jpg'
import normalPullupCardImage from '/images/exercise-card-images/normal-pullup-illustration.jpg'
import bulgarianSquatCardImage from '/images/exercise-card-images/bulgarian-squats-illustration.jpg'

import singleHandPushupCardImage from '/images/exercise-card-images/single-arm-push-up-2.jpg'
import oneHandChinupCardImage from '/images/exercise-card-images/one-arm-chin-up.jpg'
import pistolSquatCardImage from '/images/exercise-card-images/pistol-squat-illustration.jpg'

// main one
import ropeSkippingCardImage from '/images/exercise-card-images/skipping-rope-illustration.jpg'

//backup one
import ropeSkippingBackupCardImage from '/images/exercise-card-images/skipping-rope-illustration-2.jpg'

export const beginnerExercises = [
        {
            id: 1,
            name: "Knee Pushup",
            reps: "3 sets * 10 reps",
            image: pushupCardImage
        },

        {
            id: 2,
            name: "Resistance band assisted Pullups",
            reps: "3 sets * 5 reps",
            image: bandAssistedPullupsCardImage
        },

        {
            id: 3,
            name: "Squats",
            reps: "3 sets * 10 reps",
            image: squatsCardImage
        },

        {
            id: 4,
            name: "Rope skipping",
            reps: "120 rope skips.",
            image: ropeSkippingCardImage,
            backup: ropeSkippingBackupCardImage
        }
    ];

export const experiencedExercises = [
        {
            id: 5,
            name: "Diamond Pushups",
            reps: "3 sets * 10 reps",
            image: diamondPushupCardImage
        },

        {
            id: 6,
            name: "Pullups",
            reps: "3 sets * 5 reps",
            image: normalPullupCardImage
        },

        {
            id: 7,
            name: "Bulgarian Squats",
            reps: "3 sets * 10 reps",
            image: bulgarianSquatCardImage
        },

        {
            id: 8,
            name: "Rope skipping",
            reps: "240 rope skips.",
            image: ropeSkippingCardImage,
            backup: ropeSkippingBackupCardImage
        }
    ];

export const advancedExercises = [
        {
            id: 9,
            name: "Single hand pushup",
            reps: "3 sets * 10 reps",
            image: singleHandPushupCardImage
        },

        {
            id: 10,
            name: "Single hand chin-up",
            reps: "3 sets * 5 reps",
            image: oneHandChinupCardImage
        },

        {
            id: 11,
            name: "Pistol Squats",
            reps: "3 sets * 10 reps",
            image: pistolSquatCardImage
        },

        {
            id: 12,
            name: "Rope skipping",
            reps: "360 rope skips.",
            image: ropeSkippingCardImage,
            backup: ropeSkippingBackupCardImage
        }
    ]