// components/common/Card.tsx
import React from "react";
import { type CardProps } from "@/interfaces";

const Card: React.FC<CardProps> = ({ title, content }) => {
  return (
    <div className="border rounded-md p-4 shadow-md max-w-md w-full bg-white dark:bg-gray-800">
      <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">{title}</h2>
      <p className="text-gray-700 dark:text-gray-300">{content}</p>
    </div>
  );
};

export default Card;


import { type CardProps } from "../../interfaces";

export default function Card({ title, content }: CardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200 hover:shadow-lg transition-shadow">
      <h3 className="text-xl font-semibold text-gray-800 mb-3">
        {title}
      </h3>
      <p className="text-gray-600 leading-relaxed">
        {content}
      </p>
    </div>
  );
}