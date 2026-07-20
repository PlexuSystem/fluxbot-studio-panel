import { afterEach, describe, expect, it, vi } from "vitest";
import { NextRequest } from "next/server";
import { isAdminAuthorized } from "@/app/api/v1/widget/_utils";

describe("isAdminAuthorized", () => {
  afterEach(() => {
    vi.unstubAllEnvs();
  });

  it("fails closed when a production key is missing", () => {
    vi.stubEnv("NODE_ENV", "production");
    vi.stubEnv("WIDGET_ADMIN_KEY", "");

    const request = new NextRequest("https://panel.fluxbotia.com/api/v1/widget/admin/training", {
      headers: { "x-admin-key": "dev-admin-key" },
    });

    expect(isAdminAuthorized(request)).toBe(false);
  });

  it("accepts only the configured administrative key", () => {
    vi.stubEnv("NODE_ENV", "production");
    vi.stubEnv("WIDGET_ADMIN_KEY", "panel-production-key");

    const authorized = new NextRequest("https://panel.fluxbotia.com/api/v1/widget/admin/training", {
      headers: { "x-admin-key": "panel-production-key" },
    });
    const rejected = new NextRequest("https://panel.fluxbotia.com/api/v1/widget/admin/training", {
      headers: { "x-admin-key": "incorrect" },
    });

    expect(isAdminAuthorized(authorized)).toBe(true);
    expect(isAdminAuthorized(rejected)).toBe(false);
  });
});
