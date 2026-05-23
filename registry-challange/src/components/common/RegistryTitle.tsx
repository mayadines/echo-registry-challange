interface RegistryTitleProps {
  size?: "lg" | "sm";
}

export function RegistryTitle({ size = "lg" }: RegistryTitleProps) {
  return (
    <div className="text-center mb-8 space-y-4">
      <h1
        className={`font-light text-gray-900 leading-tight ${size === "lg" ? "text-5xl" : "text-3xl"}`}
      >
        Explore the Container{" "}
        <em className="text-[#8a9a3a] not-italic font-medium">Registry</em>
      </h1>
    </div>
  );
}
