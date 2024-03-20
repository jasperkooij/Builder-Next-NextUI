"use client";
import { builder, Builder } from "@builder.io/react";
import Counter from "./components/Counter/Counter";
import BuilderImage from "@/components/BuilderImage"

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

Builder.registerComponent(Counter, {
  name: "Counter",
  inputs: [
    {
      name: "initialCount",
      type: "number",
    },
  ],
});

Builder.registerComponent(BuilderImage, {
  name: 'Image', // The same name you used in Builder.io
  override: true,
  inputs: [
    // Add any custom inputs if needed, repeating standard ones
    { name: 'image', type: 'file' },
    { name: 'backgroundPosition', type: 'string' },
    { name: 'lazy', type: 'boolean' },
    { name: 'fitContent', type: 'boolean' },
    { name: 'aspectRatio', type: 'number' },
    { name: 'lockAspectRatio', type: 'boolean' },
    { name: 'height', type: 'number' },
    { name: 'width', type: 'number' },
    { name: 'altText', type: 'string' },
    { name: 'className', type: 'string' }
  ],
});
