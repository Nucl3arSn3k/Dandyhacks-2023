import { BoldedHeader } from "@/components/BoldedHeader";
import { StoneModal } from "@/components/StoneModal";
import React from "react";
import axios from "axios";
import { useBoolean } from "@chakra-ui/react";
import { useRouter } from "next/router";

interface Props {
  isOpen?: boolean;
  file: File | null;
  onClose: VoidFunction;
}

export const ConfirmFileModal = ({ file, isOpen = false, onClose }: Props) => {
  const [loading, setLoading] = useBoolean(false);
  const router = useRouter();

  async function postFile(base64: string) {
    setLoading.on();
    try {
      const newQuest = await axios.post("/api/createQuest", {
        title: "test",
        base64: base64,
      });
      console.log(newQuest);
      router.push(`/raft/battle/${newQuest.data.id}`);
    } catch (e) {
      setLoading.off();
    }
  }

  return (
    <StoneModal
      isOpen={isOpen}
      onClose={onClose}
      header={"Create Quest"}
      confirmAction={() => {
        fileToBase64(file!, (error, base64Data) => {
          if (error) {
            console.error(error);
          } else {
            postFile(base64Data!);
          }
        });
      }}
    >
      <BoldedHeader fontSize="1.4em" shadowOffset={3} py="20px" as="p">
        {loading ? "Creating Quest..." : file?.name}
      </BoldedHeader>
    </StoneModal>
  );
};

function fileToBase64(
  file: File,
  callback: (error: string | null, base64Data: string | null) => void
) {
  const reader = new FileReader();

  reader.onload = () => {
    if (reader.result) {
      callback(null, (reader.result as string).split(",")[1]);
    } else {
      callback("Failed to read the file.", null);
    }
  };

  reader.onerror = () => {
    callback("Error reading the file.", null);
  };

  reader.readAsDataURL(file);
}
