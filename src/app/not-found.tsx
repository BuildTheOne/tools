"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";

export default function NotFoundPage() {
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <Card className="gap-4">
          <CardHeader className="gap-0">
            <CardTitle className="text-2xl text-center">
              404 Not Found
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-5.5 text-center">
            <p className="text-center">Page Not Found</p>
            <Button
              onClick={() => window.history.back()}
              variant="outline"
              className="cursor-pointer"
            >
              <Icon icon="ChevronLeft" />
              <span>Back to Previous Page</span>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
