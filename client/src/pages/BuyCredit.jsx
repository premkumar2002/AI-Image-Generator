import React, { useContext, useState } from "react";
import { Check } from "lucide-react";
import { plans } from "../assets/assets";
import { AppContext } from "../context/AppContext";

const Button = ({ children, className, variant = "default", ...props }) => (
  <button
    className={`px-4 py-2 rounded-full font-medium transition-transform duration-300 ease-in-out transform hover:scale-105 ${
      variant === "default"
        ? "bg-black text-white hover:bg-gray-800"
        : "bg-white text-black border border-black hover:bg-gray-100"
    } ${className}`}
    {...props}
  >
    {children}
  </button>
);

const Card = ({ children, isPopular, className, ...props }) => (
  <div
    className={`relative border border-gray-500 bg-white rounded-lg p-6 flex flex-col transition-transform duration-300 ease-in-out transform hover:scale-105 ${className}`}
    {...props}
  >
    {isPopular && (
      <span className="absolute -top-2 -left-3 bg-yellow-400 text-black text-xs font-semibold uppercase px-3 py-1 rounded-full shadow-md">
        Popular
      </span>
    )}
    {children}
  </div>
);

const Switch = ({ checked, onChange }) => (
  <button
    className={`w-11 h-6 flex items-center rounded-full p-1 ${
      checked ? "bg-black" : "bg-gray-300"
    }`}
    onClick={() => onChange(!checked)}
  >
    <div
      className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform ${
        checked ? "translate-x-5" : "translate-x-0"
      }`}
    />
  </button>
);

const BuyCredit = () => {
  const [isAnnual, setIsAnnual] = useState(false);
  const { user } = useContext(AppContext);

  return (
    <div className="flex flex-col items-center py-12 px-4 min-h-screen">
      <h1 className="text-3xl md:text-4xl font-extrabold text-center mb-4">
        Choose Your Plan
      </h1>
      <p className="text-lg md:text-xl text-gray-600 text-center mb-8">
        Unlock the power of AI-generated images with our flexible plans
      </p>

      <div className="flex items-center space-x-2 mb-12">
        <span
          className={`text-sm md:text-base ${!isAnnual ? "font-semibold" : ""}`}
        >
          Monthly
        </span>
        <Switch checked={isAnnual} onChange={setIsAnnual} />
        <span
          className={`text-sm md:text-base ${isAnnual ? "font-semibold" : ""}`}
        >
          Annual (Save 20%)
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
        {plans.map((plan) => (
          <Card
            key={plan.name}
            isPopular={plan.name === "Advanced"}
            className={`${
              plan.name === "Advanced"
                ? "border-black shadow-lg md:scale-105"
                : ""
            }`}
          >
            <div className="mb-4">
              <h2 className="text-lg md:text-xl font-bold">{plan.name}</h2>
              <p className="text-sm text-gray-600">{plan.description}</p>
            </div>
            <div className="mb-6 flex-grow">
              <div className="text-2xl md:text-3xl font-bold mb-2">
                ${isAnnual ? plan.price.annually : plan.price.monthly}
                <span className="text-sm font-normal text-gray-600">
                  {isAnnual ? "/year" : "/month"}
                </span>
              </div>
              <p className="text-sm text-gray-600 mb-4">
                {plan.credits} credits
              </p>
              <ul className="space-y-2">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <Button
              variant={plan.name === "Advanced" ? "default" : "outline"}
              className="w-full"
            >
              {!user ? "Get Started" : "Purchase"}
            </Button>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default BuyCredit;
