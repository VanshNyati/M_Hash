"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const initialAnswers = {
  businessType: "",
  businessSize: "",
  yearlyIncome: "",
  lookingForFunds: "",
  biggestProblem: "",
};

const questions = [
  {
    title: "Basic Business Information",
    questions: [
      { question: "What do you do?", type: "input", key: "businessType" },
      {
        question: "How big is your business?",
        type: "radio",
        key: "businessSize",
        options: ["Very small", "Small", "Medium"],
      },
    ],
  },
  {
    title: "Financial Needs",
    questions: [
      {
        question: "What is your yearly income from the business?",
        type: "select",
        key: "yearlyIncome",
        options: ["Less than ₹10 lakh", "₹10-50 lakh", "More than ₹50 lakh"],
      },
      {
        question: "Are you looking for funds?",
        type: "radio",
        key: "lookingForFunds",
        options: ["Yes", "No"],
      },
    ],
  },
  {
    title: "Challenges Faced",
    questions: [
      {
        question: "What is the biggest problem your business faces?",
        type: "select",
        key: "biggestProblem",
        options: [
          "No money",
          "No workers",
          "No market",
          "No raw materials",
          "Transport issues",
          "Too much competition",
          "No equipment",
        ],
      },
    ],
  },
];

const Questionnaire = () => {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState(initialAnswers);

  const handleInputChange = (key, value) => {
    setAnswers((prev) => ({ ...prev, [key]: value }));
  };

  const handleNext = () => {
    if (step < questions.length - 1) {
      setStep((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    if (step > 0) {
      setStep((prev) => prev - 1);
    }
  };

  const progress = ((step + 1) / questions.length) * 100;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-2xl bg-gray-800 rounded-lg shadow-xl p-8"
      >
        <h1 className="text-4xl font-bold mb-6 text-center">Business Directory</h1>
        <p className="text-center mb-8 text-gray-400">
          Answer the questions to get suggested the best policies for your business
        </p>

        <motion.div
          key={step}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
        >
          <h2 className="text-2xl font-semibold mb-4">{questions[step].title}</h2>
          {questions[step].questions.map((q, index) => (
            <div key={index} className="mb-6">
              <Label className="text-lg mb-2">{q.question}</Label>
              {q.type === "input" && (
                <Input
                  value={answers[q.key]}
                  onChange={(e) => handleInputChange(q.key, e.target.value)}
                  className="bg-gray-700 border-gray-600 text-white"
                />
              )}
              {q.type === "radio" && (
                <RadioGroup
                  value={answers[q.key]}
                  onValueChange={(value) => handleInputChange(q.key, value)}
                  className="flex flex-col space-y-2 mt-2"
                >
                  {q.options?.map((option) => (
                    <div key={option} className="flex items-center space-x-2">
                      <RadioGroupItem value={option} id={option} />
                      <Label htmlFor={option}>{option}</Label>
                    </div>
                  ))}
                </RadioGroup>
              )}
              {q.type === "select" && (
                <Select
                  value={answers[q.key]}
                  onValueChange={(value) => handleInputChange(q.key, value)}
                >
                  <SelectTrigger className="bg-gray-700 border-gray-600 text-white">
                    <SelectValue placeholder="Select an option" />
                  </SelectTrigger>
                  <SelectContent>
                    {q.options?.map((option) => (
                      <SelectItem key={option} value={option}>
                        {option}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
            </div>
          ))}
        </motion.div>

        <div className="flex justify-between mt-8">
          <Button
            onClick={handleBack}
            disabled={step === 0}
            variant="outline"
            className="flex items-center"
          >
            <ChevronLeft className="mr-2 h-4 w-4" /> Back
          </Button>
          <Button
            onClick={handleNext}
            disabled={step === questions.length - 1}
            className="flex items-center bg-purple-600 hover:bg-purple-700"
          >
            Next <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        <div className="mt-8 bg-gray-700 rounded-full h-2 overflow-hidden">
          <motion.div
            className="h-full bg-purple-600"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Questionnaire;
